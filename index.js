const axios = require("axios")

var DiscordToken = 'put your discord account token here'
var ChannelID = 'put che channel id you want to spam in here';

function Post_Axios(url,data,h,p,call){
    axios.post(`${url}`,
    data,
    {
        params:p,
        headers:h
    }).then(function (response) {
        call(response,0)
    })
      .catch(function (error) {
        console.log(error)
        call(error,1)
    })
}
setInterval(
    ()=>{
        Post_Axios('https://discord.com/api/v9/channels/'+ChannelID+'/typing',{},
        {
            Authorization:DiscordToken,
            Origin : 'https://discord.com',
            'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0'
        },{},
        (data,code)=>{
            if(code==0){
                console.log('Done')
            }else{
                console.log(data)
            }
        })
    },8000)
