import propTypes from "prop-types";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="row d-flex justify-content-center">
			<Post
				img="https://images.ecestaticos.com/6uBjSmsBorRk6l_IHAxkBS1JCwE=/114x0:1997x1410/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F721%2F122%2F714%2F72112271431cb1078c3fe3e75ad5ab41.jpg"
				nombre="perro"
			/>
			<Post img="https://hundsport.mx/wp-content/uploads/2021/11/Cuidados-para-perros-enormes-Hundsport.jpg" />
			<Post img="https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2021/03/25/605d32e3c7411.r_1618674972774.0-240-3000-1741.jpeg" />
		</div>
	);
};

function Post(props) {
	return (
		<div className="row d-flex justify-content-center">
			<div class="card p-3" style={{ width: "18rem" }}>
				<p>{props.nombre}</p>
				<img src={props.img} />
				<div className="row d-flex justify-content-between"></div>

				<div className="row">
					<div className="col-1">
						<i class="fas fa-heart"></i>
					</div>
					<div className="col-1">
						<i class="fas fa-heart"></i>
					</div>
					<div className="col-1">
						<i class="fas fa-heart"></i>
					</div>
				</div>
				<div>
					<div className="col-2">
						<i class="fas fa-heart"></i>
					</div>
				</div>
				<div className="row p-1">
					<div className="col">
						<input type="text" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
