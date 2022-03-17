import React from 'react'
import Comentario from './Comentario'

const Saludo = (props) => {

    // console.log(this.props);

    return (
        <div>
            <h1>Componentes dinámicos</h1>
            <h4>Hola {props.persona}!</h4>
            <h4>Felices {props.edad} años!</h4>
            <hr/>
            
            <h3 className="text-center my-3">Bloque de comentarios</h3>
            <Comentario 
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi illo praesentium necessitatibus tempora doloribus laboriosam velit quia, ut blanditiis mollitia sed culpa voluptatum et reiciendis cumque ea architecto repellat.
                Cupiditate repudiandae aliquid facilis architecto libero incidunt magni molestiae earum praesentium nemo! Tempore vero cumque facilis dolor voluptate, enim rem dolorum earum ratione fugit placeat magni dolores aliquid, porro obcaecati.
                Delectus officia dolor, molestiae possimus quis nam veniam sint laborum necessitatibus, ratione, ipsum quasi optio. Voluptatibus accusamus dignissimos veritatis reprehenderit animi molestias repellendus nemo sit nostrum iusto! Dolore, soluta consectetur!"
                persona="José"
                imageUrl="//picsum.photos/300/200"/>
            <Comentario 
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi illo praesentium necessitatibus tempora doloribus laboriosam velit quia, ut blanditiis mollitia sed culpa voluptatum et reiciendis cumque ea architecto repellat.
                Cupiditate repudiandae aliquid facilis architecto libero incidunt magni molestiae earum praesentium nemo! Tempore vero cumque facilis dolor voluptate, enim rem dolorum earum ratione fugit placeat magni dolores aliquid, porro obcaecati.
                Delectus officia dolor, molestiae possimus quis nam veniam sint laborum necessitatibus, ratione, ipsum quasi optio. Voluptatibus accusamus dignissimos veritatis reprehenderit animi molestias repellendus nemo sit nostrum iusto! Dolore, soluta consectetur!"
                persona="Emiliano"
                imageUrl="//picsum.photos/300/200"/>
            <Comentario 
                texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi illo praesentium necessitatibus tempora doloribus laboriosam velit quia, ut blanditiis mollitia sed culpa voluptatum et reiciendis cumque ea architecto repellat.
                Cupiditate repudiandae aliquid facilis architecto libero incidunt magni molestiae earum praesentium nemo! Tempore vero cumque facilis dolor voluptate, enim rem dolorum earum ratione fugit placeat magni dolores aliquid, porro obcaecati.
                Delectus officia dolor, molestiae possimus quis nam veniam sint laborum necessitatibus, ratione, ipsum quasi optio. Voluptatibus accusamus dignissimos veritatis reprehenderit animi molestias repellendus nemo sit nostrum iusto! Dolore, soluta consectetur!"
                persona="Jiménez"
                imageUrl="//picsum.photos/300/200"/>

        </div>
    )
}

export default Saludo
