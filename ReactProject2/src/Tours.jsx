
import {useState} from 'react'

const Tours = ({tours,setTours}) => {
    const {id,price,image,name,info}  = tours

    const [readMore,setReadMore] = useState(false)

    const deleteButton = (id) => {
        setTours(tours.filter(tour => tour.id!== id))
    }

    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {
                    tours.map(tour => {
                        return (
                            <article className="single-tour" key={tour.id}>
                                <img src={tour.image} alt={tour.name} />
                                <footer>
                                    <div className="tour-info">
                                        <h4>{tour.name}</h4>
                                        <h4 className='tour-price'>${tour.price}</h4>
                                    </div>
                                    <p>{readMore ? tour.info : `${tour.info.substring(0,200)}...`}
                                    <button onClick={() => setReadMore(!readMore)}>
                                        {readMore? 'Read Less' : 'Read More'}
                                    </button>
                                    </p>
                                    <button onClick={() => deleteButton(tour.id)} className="delete-btn">Not intersted</button>
                                </footer>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Tours