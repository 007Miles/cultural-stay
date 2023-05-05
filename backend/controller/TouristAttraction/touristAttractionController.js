import TouristAttraction from '../../models/TouristAttraction/TouristAttraction.js'
import cloudinary from '../../config/cloudinary.js'

// get all tourist attractions with search and sort options passed as a query in the req
export const getAllTouristAttractions = async (req, res) => {
  const { name, location, area, sort, fields } = req.query
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

  // console.log(queryObject)

  let result = TouristAttraction.find(queryObject)

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

  const touristAttractions = await result

  res
    .status(200)
    .json({ touristAttractions, nbHits: touristAttractions.length })
}

// Get single tourists attractions by Id
export const getTouristAttractionById = async (req, res) => {
  const id = req.params.id
  try {
    const touristAttractions = await TouristAttraction.findById(id).exec()
    res.json(touristAttractions)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

// Create a new tourits attraction site with uploading an image
export const createTouristAttraction = async (req, res) => {
  const { name, description, location, image, area } = req.body

  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: 'afPlaces',
  })
  // req.body.image = result.secure_url
  try {
    const newTouristAttraction = new TouristAttraction({
      name,
      description,
      location,
      image: result.secure_url,
      area,
    })
    await newTouristAttraction.save()
    res.json(newTouristAttraction)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

// Update a tourist attractions by Id
export const updateTouristAttraction = async (req, res) => {
  const { id } = req.params
  const { name, description, location, image, area } = req.body
  try {
    const touristAttraction = await TouristAttraction.findByIdAndUpdate(
      id,
      { name, description, location, image, area },
      { new: true }
    ).exec()
    res.json(touristAttraction)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

// Delete a tourist attraction by Id
export const deleteTouristAttraction = async (req, res) => {
  const { id } = req.params
  try {
    await TouristAttraction.findByIdAndDelete(id).exec()
    res.json({ message: 'Tourist attraction deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}
