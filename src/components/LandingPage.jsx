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
        img: 'https://www.nasa.gov/wp-content/uploads/2025/02/49533887268-9d045c7081-o.jpg'
    },
    {
        img: 'https://www.nasa.gov/wp-content/uploads/2025/02/30dorlarge.jpg'
    },
    {
        img: 'https://www.nasa.gov/wp-content/uploads/2025/02/pia26427orig.jpg'
    },
    {
        img: 'https://www.nasa.gov/wp-content/uploads/2025/02/hubble-leda1313424-stsci-01jjadtmj80r1r4w6kk563rw2c.jpg'
    },
    {
        img: 'https://www.nasa.gov/wp-content/uploads/2025/01/hubble-jupiter-jul22-3-flat-final.jpg'
    },
    {
        img: 'https://www.nasa.gov/wp-content/uploads/2024/12/hubble-ngc2566-potw2451a.jpg'
    },
    {
        img: 'https://www.nasa.gov/wp-content/uploads/2024/12/ngc602-5ddbfb.jpg'
    },
]

