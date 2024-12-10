import React from 'react'

export const NewTweet = ({ setNewTweet, newTweet }) => {

    let tweet = ""

    const url = import.meta.env.VITE_URL
    const token = import.meta.env.VITE_TOKEN

    const changeHandler = (event) => {

        tweet = event.target.value

    }

    const clickHandler = async () => {
        let user = localStorage.getItem("user")

        let tmp = {
            description: tweet,
            user_name: user
        }

        let newURL = `${url}/twitter_posts`

        console.log(newURL)
        console.log(token)
        let response = await fetch(newURL, {
            method: "POST",
            headers: {
                'Authorization': token,
                'apikey': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tmp)
        })

        if (response.ok) {
            console.log("Tweet Created!!!")
            setNewTweet(newTweet + 1)
        } else {
            let err = await response.json()
            console.log(err)
        }
    }

    return (
        <div className='card mb-3'>

            <div className='card-body'>

                <textarea onChange={changeHandler} className='form-control mb-2' placeholder='What are you thinking about ...'>
                </textarea>

                <button onClick={clickHandler} className='btn btn-dark w-100' > Publish</button>

            </div>

        </div>
    )
}