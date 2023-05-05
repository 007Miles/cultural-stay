import Suggestions from '../../models/TouristAttraction/Suggestions.js'
import cloudinary from '../../config/cloudinary.js'

// get all tourist attraction Suggestions with search and sort options passed as a query in the req
export const getAllSuggestions = async (req, res) => {
  const { name, location, area, status, sort, fields } = req.query
  const queryObject = {}

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  if (location) {
    queryObject.location = { $regex: location, $options: 'i' }
  }

  if (area) {
    queryObject.area = { $regex: area, $options: 'i' }
  }

  if (status) {
    queryObject.status = { $regex: status, $options: 'i' }
  }

  // console.log(queryObject)

  let result = Suggestions.find(queryObject)

  // sort
  if (sort) {
    const sortList = sort.split(',').join(' ')
    result = result.sort(sortList)
  } else {
    result = result.sort('createdAt')
  }

  if (fields) {
    const fieldList = fields.split(',').join(' ')
    result = result.select(fieldList)
  }

  const Suggestions = await result

  res.status(200).json({ Suggestions, nbHits: Suggestions.length })
}

// Get single tourists attraction Suggestions by Id
export const getSuggestionsById = async (req, res) => {
  const id = req.params.id
  try {
    const Suggestionss = await Suggestions.findById(id).exec()
    res.json(Suggestionss)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

// Create a new tourits attraction Suggestion site with uploading an image
export const createSuggestions = async (req, res) => {
  const { name, description, location, image, status, area } = req.body

  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: 'afSuggestionForm',
  })
  // req.body.image = result.secure_url
  try {
    const newSuggestions = new Suggestions({
      name,
      description,
      location,
      image: result.secure_url,
      status,
      area,
    })
    await newSuggestions.save()
    res.json(newSuggestions)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

// Update a tourist attraction Suggestions by Id
export const updateSuggestions = async (req, res) => {
  const { id } = req.params
  const { name, description, location, image, status, area } = req.body
  try {
    const Suggestions = await Suggestions.findByIdAndUpdate(
      id,
      { name, description, location, image, status, area },
      { new: true }
    ).exec()
    res.json(Suggestions)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

// Delete a tourist attraction Suggestion by Id
export const deleteSuggestions = async (req, res) => {
  const { id } = req.params
  try {
    await Suggestions.findByIdAndDelete(id).exec()
    res.json({ message: 'Tourist attraction Suggestion deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}
