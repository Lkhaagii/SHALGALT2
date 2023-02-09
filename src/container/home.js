import React from "react";
import "./home.css"
import image1 from "../assest/2023-corvette-3lt-gkz-driver-front-3quarter-nav.webp"
import image2 from "../assest/images (2).jpg"
import image3 from "../assest/images (3).jpg"
import {Link} from "react-router-dom";

const Home =()=>{
    const data=[
        {
            key: 1,
            title: "TITLE1",
            img: image1,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            button1: <Link to={'/admin/about1'}>more</Link>,
        },
        {
            key: 2,
            title: "TITLE2",
            img: image2,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            button1: <Link to={'/admin/about2'}>more</Link>,
            
        },
        {
            key: 3,
            title: "TITLE3",
            img: image3,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ",
            text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            button1: <Link to={'/admin/about3'}>more</Link>,
        },
    ];
    return(
        <div className="body">
            <div className="flex">
                {
                    data.map ((row)=>(
                        <div className="GG">
                            <h2>{row.title}</h2>
                            <img src={row.img} alt="/"/>
                            <p>{row.description}</p>
                            <p>{row.text}</p>
                            <button className="button">{row.button1}</button>
                        </div>
                        
                    ))
                }

            </div>

        </div>
    )
}
export default Home