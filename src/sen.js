import React from 'react';

export default function Senti(props)
{
    var sentiment= require('sentiment')
var SentimentObject = new sentiment()
var data = SentimentObject.analyze(props.text).score
var string="  "
if(data>0)
{
    if(data>2)
    {
        string+="Very Happy,Cheerful"
    }
    else
    {
    string+="Positive,Happy"
    }
}
else if(data<0)
{
    if(data<-2)
    {
        string+="Very Sad"
    }
    else
    {
        string+="Sad,Negative"
    }
}
else{
    string+="Normal"
}

return(<div><p> Entered Text : {props.text}</p> <p> Score : {data}</p> <p>Result :  {string} </p></div>)
}

