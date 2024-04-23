
const Pokemon = ({ name, image }) => {    
    
      return (
       
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <img src={image} alt={`Imagen de ${name}`}  />
    
            {/* <Image
              className="w-full h-64 object-cover"
              src={image}
              alt={`Imagen de ${name}`}
              width={300}
              height={300}
            /> */}
            <p className="block text-xl font-bold mb-2 text-blue-600 hover:underline text-center p-2">{name}</p>
         
          </div>
        
      );
    };


export default Pokemon;
    