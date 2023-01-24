import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>CRUD Django React</Navbar.Brand>
			</Container>
		</Navbar>
	);
}
