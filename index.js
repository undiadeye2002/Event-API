import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000
const masterKey = "ab8dba26-a234-4cc5-b098-8ab474b9e69f"

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Get all the Event
app.get('/events', (req,res) => {
    console.log(events)
    res.json(events)
})
//Get Event by id
app.get("/events/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const foundEvent = events.find((e) => e.id === id);
    console.log(foundEvent)
    if(!foundEvent) return res.status(404).json({Error: "Event not found"})
    res.json(foundEvent)

})
//Post a new event 
app.post("/events", (req,res) => {
    const newEvent = {
        id: events.length + 1,
        place: req.body.place,
        event: req.body.event,
        weatherCondition: req.body.weatherCondition,
        month: req.body.month,
        date: new Date(),
        
    };
    events.push(newEvent)
    console.log(newEvent)
    res.status(200).json(newEvent)
})
//PATCH an event where my events will be updated(Updating the event,month)
app.patch("/events/:id", (req,res) => {
    const id = parseInt(req.params.id)
    const existEvent = events.find((e) => e.id === id);
    if(!existEvent) return res.status(404).json({Error: "Event not found"})
    const replaceEvent = {
        id: id,
        // place: req.body.place || existEvent.place,
        event: req.body.event || existEvent.event,
        // weatherCondition: req.body.weatherCondition || existEvent.weatherCondition,
        month: req.body.month || existEvent.month,
        date: new Date()
    };
    const searchIndex = events.findIndex((e) => e.id ===id)
    events[searchIndex] = replaceEvent;
    console.log(events[searchIndex]);
    res.json(replaceEvent)

})
//PUT an event, upadting the whole of the event
app.put("/events/:id",(req,res)=> {
    const id = parseInt(req.params.id)
    const currentEvent = events.find((e) => e.id === id);
    if(!currentEvent) return res.status(404).json({Error: "Event not found"})
    const replaceEvent = {
        id: id,
        place: req.body.place || currentEvent.place,
        event: req.body.event || currentEvent.event,
        weatherCondition: req.body.weatherCondition || currentEvent.weatherCondition,
        month: req.body.month || currentEvent.month,
        date: new Date()
    }
    const searchIndex = events.findIndex((e) => e.id === id);
    events[searchIndex] = replaceEvent;
    console.log(replaceEvent);
    res.status(200).json(replaceEvent)
});
//DELETE an event by id
app.delete("/events/:id", (req,res) =>{
    const id = parseInt(req.params.id)
    const searchIndex = events.findIndex((e) => e.id === id);
    if (searchIndex === -1) return res.status(404).json({Error:`Events with id ${id} not found`})
    //Deleting the event
    events.splice( searchIndex, 1);
    res.json({Message: `Event with id ${id} deleted successfully.`})
   
});

app.listen(port,() => {
    console.log(`API is running on port: ${port}`)
})

let events = [
    {
        id: 1,
        place: 'Central Park',
        event: 'Concert',
        weatherCondition: 'Sunny',
        month: 'May',
        
    },
    {
        id: 2,
        place: 'Downtown Museum',
        event: 'Art Exhibition',
        weatherCondition: 'Cloudy',
        month: 'January'
    },
    {
        id: 3,
        place: 'City Stadium',
        event: 'Football Match',
        weatherCondition: 'Rainy',
        month: 'June- July'
    },
    {
        id: 4,
        place: 'York',
        event: 'York Christmas Festival',
        weatherCondition: 'Cold, chance of snow or rain.',
        month: 'November - December'
    },
    {
        id: 5,
        place: 'Bristol',
        event: 'Bristol Balloon Fiesta ',
        weatherCondition: 'Variable, can be warm and sunny or showery.',
        month: 'August'
    },
    {
        id: 6,
        place: 'Liverpool',
        event: 'Liverpool International Music Festival',
        weatherCondition: 'Mild to warm, possibility of rain.',
        month: 'July - August'
    },
    {
        id: 7,
        place: 'Central Park',
        event: 'Concert',
        weatherCondition: 'Warm, occasional showers.',
        month: 'April'
    },
    {
        id: 8,
        place: 'Cambridge',
        event: 'Cambridge Folk Festival',
        weatherCondition: 'Cloudy',
        month: 'July'
    },
    {
        id: 9,
        place: 'Oxford',
        event: 'Oxford Literary Festival',
        weatherCondition: 'Cool, chance of rain.',
        month: 'March - April'
    },
    {
        id: 10,
        place: 'Brighton',
        event: 'Brighton Pride',
        weatherCondition: 'Mild to warm, possibility of showers.',
        month: 'August'
    },
    {
        id: 11,
        place: 'Stratford-upon-Avon',
        event: 'Royal Shakespeare Company performances',
        weatherCondition: 'Cloudy',
        month: 'year-round'
    },
    {
        id: 12,
        place: 'Hay-on-Wye, Wales',
        event: 'Hay Festival of Literature & Arts',
        weatherCondition: 'Typically mild, but with possible rain showers.',
        month: 'May - June'
    },
    {
        id: 13,
        place: 'Birmingham',
        event: 'Birmingham Jazz Festival',
        weatherCondition: 'Warm, with occasional showers.',
        month: 'July'
    },
    {
        id: 14,
        place: 'Nottingham',
        event: 'Nottingham Goose Fair',
        weatherCondition: 'Cool, with a higher likelihood of rain',
        month: 'October'
    },
    {
        id: 15,
        place: 'Henley-on-Thames',
        event: 'Henley Royal Regatta',
        weatherCondition: 'Usually warm, though evenings can be cooler.',
        month: 'June - July'
    },
    {
        id: 16,
        place: 'Isle of Wight',
        event: 'Isle of Wight Festival',
        weatherCondition: 'Likely to be warm, but prepare for rain just in case.',
        month: 'June'
    },
    {
        id: 17,
        place: 'Bath',
        event: 'Bath Literature Festival ',
        weatherCondition: 'Generally mild, but with potential for wet condition',
        month: 'May'
    },
    {
        id: 18,
        place: 'Manchester',
        event: 'Manchester International Festival ',
        weatherCondition: 'Warm, with a chance of rain',
        month: 'July'
    },
    {
        id: 19,
        place: 'Glastonbury',
        event: 'Glastonbury Festival',
        weatherCondition: 'Can range from hot and sunny to rainy and muddy.',
        month: 'june'
    },
    {
        id: 20,
        place: 'Edinburgh, Scotla',
        event: 'Edinburgh Festival Fringe',
        weatherCondition: 'Mild summer temperatures, but can be unpredictable with rain and wind',
        month: 'Decemeber'
    },
    {
        id: 21,
        place: 'London',
        event: 'Wimbledon Tennis Championships ',
        weatherCondition: 'Mild to warm, possibility of rain',
        month: 'June - July'
    },
    {
        id: 22,
        place: 'Glasgow, Scotland',
        event: 'Glasgow International Comedy ',
        weatherCondition: 'Mild, chance of rain.',
        nonth: 'March'
    },
    {
        id: 23,
        place: 'Cardiff, Wales',
        event: 'Six Nations Rugby Championship ',
        weatherCondition: 'Variable, cool with potential rain.',
        month: ' February - March'
    },
    {
        id: 24,
        place: 'Belfast, Northern Irelanddon',
        event: 'Belfast International Arts Festiva',
        weatherCondition: 'Mild, chance of rain.',
        month: 'October'
    },
    {
        id: 25,
        place: 'Newcastle',
        event: 'Great North Run',
        weatherCondition: 'Mild, chance of showers.',
        month: 'September'
    },
    {
        id: 26,
        place: 'Leeds',
        event: 'Leeds Festival ',
        weatherCondition: 'ariable, can be warm and sunny or showery.',
        month: 'August'
    },
    {
        id: 27,
        place: 'Nottingham',
        event: 'Goose Fair',
        weatherCondition: 'Cool, chance of rain.',
        month: 'October'
    },
    {
        id: 28,
        place: 'Birmingham',
        event: 'Birmingham Pride',
        weatherCondition: 'Mild to warm, possibility of showers',
        month: 'May'
    },
    {
        id: 29,
        place: 'Canterbury',
        event: 'Canterbury Festival',
        weatherCondition: 'Cool, chance of rain.',
        month: 'October'
    },
    {
        id: 30,
        place: 'Southampton',
        event: 'Southampton Boat Show  ',
        weatherCondition: 'Mild to warm, possibility of showers.',
        month: 'September'
    },
    {
        id: 31,
        place: 'London',
        event: 'Wimbledon Tennis Championships ',
        weatherCondition: 'Mild to warm, possibility of rain',
        month: 'June - July'
    },
    {
        id: 32,
        place: 'Sheffield',
        event: 'Sheffield Doc/Fest',
        weatherCondition: 'Variable, can be warm and sunny or showery.',
        month: 'June'
    },
    {
        id: 33,
        place: 'Aberdeen, Scotland',
        event: 'Aberdeen International Youth Festival ',
        weatherCondition: 'Mild, chance of rain.',
        month: 'July'
    },
    {
        id: 34,
        place: 'Inverness, Scotland',
        event: 'Belladrum Tartan Heart Festival',
        weatherCondition: 'Mild, chance of rain.',
        month: 'August'
    },
    {
        id: 35,
        place: 'Stirling, Scotland',
        event: 'Stirling Highland Games',
        weatherCondition: ' Mild, chance of rain',
        month: 'August'
    },
    {
        id: 36,
        place: 'Isle of Skye, Scotland',
        event: 'Best of the West Festival',
        weatherCondition: 'Cool, chance of rain.',
        month: 'September'
    },
    {
        id: 37,
        place: 'Cardiff, Wales',
        event: 'Cardiff International Food and Drink Festival ',
        weatherCondition: ' Variable, mild with potential rain.',
        month: 'July'
    },
    {
        id: 38,
        place: 'Swansea, Wales',
        event: 'Wales Airshow ',
        weatherCondition: 'Mild to warm, possibility of showers.',
        month: 'July'
    },
    {
        id: 39,
        place: ' Llandudno, Wales',
        event: 'Llandudno Victorian Extravaganza',
        weatherCondition: 'Variable, cool with potential rain',
        month: 'May'
    },
    {
        id: 40,
        place: 'Blackpool',
        event: ' Blackpool Illuminations',
        weatherCondition: 'Mild to cool, chance of rain.',
        month: 'August - November'
    },
    {
        id: 41,
        place: 'Newcastle-under-Lyme',
        event: 'New Vic Theatre productions',
        weatherCondition: 'Variable, cool with occasional rain',
        month: 'year-round'
    },
]


// 1. **London**:
//    - Event: Wimbledon Tennis Championships (June - July)
//    - Weather: Mild to warm, possibility of rain.

// 2. **Edinburgh, Scotland**:
//    - Event: Edinburgh Festival Fringe (August)
//    - Weather: Mild summer temperatures, but can be unpredictable with rain and wind.

// 3. **Glastonbury**:
//    - Event: Glastonbury Festival (June)
//    - Weather: Can range from hot and sunny to rainy and muddy.

// 4. **Manchester**:
//    - Event: Manchester International Festival (July)
//    - Weather: Warm, with a chance of rain.

// 5. **Bath**:
//    - Event: Bath Literature Festival (May)
//    - Weather: Generally mild, but with potential for wet conditions.

// 6. **Isle of Wight**:
//    - Event: Isle of Wight Festival (June)
//    - Weather: Likely to be warm, but prepare for rain just in case.

// 7. **Henley-on-Thames**:
//    - Event: Henley Royal Regatta (June - July)
//    - Weather: Usually warm, though evenings can be cooler.

// 8. **Nottingham**:
//    - Event: Nottingham Goose Fair (October)
//    - Weather: Cool, with a higher likelihood of rain.

// 9. **Birmingham**:
//    - Event: Birmingham Jazz Festival (July)
//    - Weather: Warm, with occasional showers.

// 10. **Hay-on-Wye, Wales**:
//     - Event: Hay Festival of Literature & Arts (May - June)
//     - Weather: Typically mild, but with possible rain showers.