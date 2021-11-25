const express = require('express')
const request = require('request')
const axios = require('axios')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const _url_post = "https://jsonplaceholder.typicode.com/posts"
const _url_users = "https://jsonplaceholder.typicode.com/users"

app.get('/api/posts/:id',  (req, res) => {   
    let id = req.params.id 
    axios.get(_url_post+'/'+id).then(res_post => {
        let post = res_post.data ;
            axios.get(_url_post+'/'+post.id+'/comments').then(res_cmt => {
                let cmts = res_cmt.data 

                    axios.get(_url_users+'/'+post.userId).then(res_usr => {
                        let user = res_usr.data 
                        res.send({...post , comments : cmts , user : user })
        
                        
                    }).catch(e => {
                        console.log(e.message)
                    })


            }).catch(e => {
                console.log(e.message)
            })

    }).catch(e => {
        console.log(e.message)
        res.send(e)
    })
  
     
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})