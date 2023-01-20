import { Box, Button, Container } from "@mui/material"
import React from "react"
import "./Banner.css"

const Banner = () => {
	return (
		<section className="banner" id="home">
			<div className="banner_container">
				<div className="banner__left">
					<div>
						<h4 className="banner__left_numbers">0 · 0 · 12</h4>
						<h1 className="banner__left_title">
							Ваш абонемент на все виды спорта
						</h1>
						<div className="banner__left_bottom">
							<Button
								sx={{
									height: "50px",
									width: "220px",
									borderRadius: "20px",
									margin: "10px",
									mb: 2,
									color: "#3446f6",
									backgroundColor: "#fff",
								}}
								className="banner__price_btn"
								variant="contained"
							>
								Посмотреть цены
							</Button>
							<span className="banner__price">От 2000 с. /месяц</span>
						</div>
					</div>
				</div>
				<div className="banner__right">
					<img
						className="banner_img"
						src="https://1fit.app/static/visual-3c11745356863fba7d2a794fe11a2a5e.png"
						alt="Header Img"
					/>
				</div>
			</div>
		</section>

		//     <section className="banner" id="home">
		//     <Container>
		//         <Row className="align-items-center">
		//             <Col xs={12} md={6} xl={7}>
		//                 <h1>
		//                     {`Pizzeria Neapoletana`}
		//                     <br />
		//                     <span className="wrap">
		//                         {text}
		//                         <br />
		//                     </span>
		//                 </h1>
		//                 <p>Place your first order and get 10% off</p>
		//                 <span className="tagline">PIZZERIA OPEN FROM 11 TO 21 HOURS</span>
		//                 <button onClick={() => goToMenu()}>
		//                     ORDER <ArrowRightCircle size={25} />
		//                 </button>
		//             </Col>
		//             <Col className="headerImg" xs={12} md={6} xl={5}>
		//                 <img
		//                     src="https://www.pizzaupten.com/wp-content/uploads/2022/02/pizza.png"
		//                     alt="Header Img"
		//                 />
		//             </Col>
		//         </Row>
		//     </Container>
		// </section>
		// )
	)
}

export default Banner