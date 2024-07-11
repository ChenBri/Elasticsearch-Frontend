function Logo({ imageSource, imgAlt }) {
    return (
        <div className="w-[50px] h-[50px] transition ease-in-out hover:scale-125 duration-200">
            <img src={imageSource} alt={imgAlt} className="" />
        </div>
    );
}

export default Logo;
