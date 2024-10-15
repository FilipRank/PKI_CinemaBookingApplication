# Template for the database since JSON doesn't allow comments :(
```
{
    "productions": [
        {
            "id": 0,
            "title": "The Jesus Film",
            "description": "Filmed on location in Israel at authentic biblical sites, this inspirational drama and commercial success retells the life of Christ.",
            "genre": "Drama",
            "durationInHours": 1.95,
            "directors": [],
            "cast": [],
            "publishedAt": "1980-11-01",
            "airingTimes": [
                "2024-11-01T16:00:00Z"
            ],
            "ticketPrice": {
                "currency": "RSD",
                "amount": 500
            },
            "reviews": [],
            "poster": "http://localhost:3000/assets/images/posters/thejesusfilm.png"
        }
    ],
    "user": [
        {
            "id": 0,
            "name": "",
            "surname": "",
            "phoneNumber": "",
            "email": "",
            "address": "",
            "password": "",
            "favouriteGenres": [],
            "basket": [
                {
                    "production": "",
                    "airsAt": "1970-01-01T00:00:00.000Z",
                    "status": "",
                    "amount": 0
                }
            ]
        }
    ],
    "review": [
        {
            "id": 0,
            "user": "",
            "comment": "",
            "rating": "",
            "publishedAt": "",
            "edited": false
        }
    ]
}
```