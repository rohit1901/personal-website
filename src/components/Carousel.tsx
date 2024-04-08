import Image from "next/image";

export const Carousel = () => {
    return (
        <div className="carousel p-4 space-x-4 bg-transparent justify-center">
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-lg" alt="carousel image 1"
                       width={300} height={400}/>
            </div>
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-lg" alt="carousel image 2"
                       width={300} height={400}/>
            </div>
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-lg" alt="carousel image 3"
                       width={300} height={400}/>
            </div>
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-lg" alt="carousel image 4"
                       width={300} height={400}/>
            </div>
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-lg" alt="carousel image 5"
                       width={300} height={400}/>
            </div>
        </div>
    )
}