const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
   //throw new Error('Argh!') 
   //res.json([{}, {}]) //to test you can also put a string
  } catch (err){
    next(err)
    //you can also do next
    //next({ status: 422,  message: 'this is horrible'})
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
  } catch (err){
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
  } catch (err){
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
  } catch (err){
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
  } catch (err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,

  })
})

module.exports = router;
