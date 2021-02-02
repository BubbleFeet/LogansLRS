import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<header>
			<Container fluid>
				<Navbar variant='dark' expand='md' collapseOnSelect>
					<LinkContainer to='/'>
						<Navbar.Brand id='logo' href='#home'>
							<img
								src='images/LOGANSLRSLOGO-NO-BG-2021-01-29.png'
								width='168'
								height='84'
								alt='Logan&#39;s Liquor Store logo'
							/>
						</Navbar.Brand>
					</LinkContainer>
					<Container>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav fill>
								<LinkContainer to='/cart'>
									<Nav.Link>
										<i className='fas fa-shopping-cart' />Shop Online
									</Nav.Link>
								</LinkContainer>
								{userInfo ? (
									<NavDropdown title={userInfo.name} id='username'>
										<LinkContainer to='/profile'>
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
									</NavDropdown>
								) : (
									<LinkContainer to='/login'>
										<Nav.Link>
											<i className='fas fa-user' />Sign In
										</Nav.Link>
									</LinkContainer>
								)}
								{userInfo &&
								userInfo.isAdmin && (
									<NavDropdown title='Admin' id='adminmenu'>
										<LinkContainer to='/admin/userlist'>
											<NavDropdown.Item>Users</NavDropdown.Item>
										</LinkContainer>
										<LinkContainer to='/admin/productlist'>
											<NavDropdown.Item>Products</NavDropdown.Item>
										</LinkContainer>
										<LinkContainer to='/admin/orderlist'>
											<NavDropdown.Item>Orders</NavDropdown.Item>
										</LinkContainer>
									</NavDropdown>
								)}
								<Route id='searchBox' render={({ history }) => <SearchBox history={history} />} />
							</Nav>
						</Navbar.Collapse>
					</Container>
					<Navbar.Text id='hoursBlock' className='d-inline-block' fluid>
						1821 Cook St.
						<br />
						Victoria, BC V8T 3P5
						<br />
						<a href='tel:250-360-2711'>250-360-2711</a>
						<br />
						Open daily 10am - 11pm
						<br />
						<ul className='d-flex connect'>
							<li>
								<a href='https://www.instagram.com/loganspubvictoria/'>
									<i class='fab fa-instagram' />
								</a>
							</li>
							<li>
								<a href='https://www.facebook.com/loganspubvictoria'>
									<i class='fab fa-facebook' />
								</a>
							</li>
							{/* <li>
								<a href='https://www.instagram.com/loganspubvictoria/'>
									<i class='fab fa-instagram' />
								</a>
							</li> */}
						</ul>
					</Navbar.Text>
				</Navbar>
			</Container>
		</header>
	)
}

export default Header
