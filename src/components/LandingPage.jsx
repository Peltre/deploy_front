import * as React from "react";
import Box from '@mui/material/Box';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function LandingPage() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h2>LANDING PAGE</h2>
            <Box sx={{ width: 600, height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={12}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
}

const itemData = [
    {
        img: 'https://assets.pokemon.com/static-assets/content-assets/cms2-es-xl/img/cards/web/SV6PT5/SV6PT5_LA_75.png'
    },
    {
        img: 'https://procardsmexico.com.mx/22449-large_default/charizard-ex-fa-alternate-art.jpg'
    },
    {
        img: 'https://m.media-amazon.com/images/I/619zzMrelOL.jpg'
    },
    {
        img: 'https://procardsmexico.com.mx/29127-large_default/greninja-ex-special-illustration-rare.jpg'
    },
    {
        img: 'https://storage.googleapis.com/images.pricecharting.com/82447b5abfdfed9a0ce21f9cf010a8d5a4e5bc63113339f7a5d3fdb1ba6321df/1600.jpg'
    },
    {
        img: 'https://tcgplayer-cdn.tcgplayer.com/product/623612_in_400x400.jpg'
    },
    {
        img: 'https://images-cdn.ubuy.co.in/6350255b2e92ab79ab0f7515-pokemon-mega-rayquaza-ex-98-98.jpg'
    },
]

