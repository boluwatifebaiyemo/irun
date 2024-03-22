
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, Button } from "@mui/material";



const MerriReg900 = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: '900'
});


export default function Index() {
  return (
    <>
      <Head>
        <title>Irun | Shop for hairs with fixes</title>
      </Head>
      <main className="h-screen bg-desktop">
        <div className="h-full w-full hidden lg:flex justify-center items-center bg-desktop">
          <div className="h-full w-full bg-[#402b3a]/45 flex justify-center items-center">
            <div className="w-full md:w-[720px] flex flex-col gap-6 px-4 md:px-0">
              <h1 className={`${MerriReg900.className} text-4xl lg:text-6xl text-center text-[#f8f4ec]`}>Shop for hairs and book an appointment for a fix</h1>
              <Link
                href='/auth/signup'
                className="py-4 flex justify-center items-center bg-[#402b3a] text-[#f8f4ec] text-2xl px-14 mx-auto rounded-md">
                <span>Get Started
                </span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full lg:hidden justify-center items-center bg-mobile">
          <div className="h-full w-full bg-[#402b3a]/45 flex justify-center items-center">
            <div className="w-full md:w-[520px] flex flex-col gap-6 px-4 md:px-0">
              <h1 className={`${MerriReg900.className} text-4xl lg:text-6xl text-center text-[#f8f4ec]`}>Shop for hairs and book an appointment for a fix</h1>
              <Link
                href='/auth/signup'
                className="py-4 flex justify-center items-center bg-[#402b3a] text-[#f8f4ec] text-2xl px-14 mx-auto rounded-md">
                <span>Get Started
                </span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* shop intro section */}

        <section className="grid grid-cols-3">
          <article>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/hair_1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography >
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </article>
          <aside className="col-span-2">
            <div className="grid grid-cols-2 gap-2">
              <Image width={300} height={400} src='/hair_hori.jpg' />
              <div className="grid grid-cols-2 gap-2">
                <Image width={200} height={400} src='/hair_1.jpg' alt="hair sample"/>
                <Image width={200} height={400} src='/hair_2.jpg' alt="hair sample"/>
                <Image width={200} height={400} src='/hair_3.jpg' alt="hair sample"/>
                <Image width={200} height={400} src='/hair_4.jpg' alt="hair sample"/>
              </div>
            </div>
          </aside>

        </section>



      </main >
    </>
  );
}


