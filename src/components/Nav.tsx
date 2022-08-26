
    import * as React from 'react';
    import { styled, alpha } from '@mui/material/styles';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import InputBase from '@mui/material/InputBase';
    import Badge from '@mui/material/Badge';
    import MenuItem from '@mui/material/MenuItem';
    import Menu from '@mui/material/Menu';
    import SearchIcon from '@mui/icons-material/Search';
    import AccountCircle from '@mui/icons-material/AccountCircle';
    import NotificationsIcon from '@mui/icons-material/Notifications';
    import MoreIcon from '@mui/icons-material/MoreVert';
    import {ShoppingCart,ShoppingBasket, ViewHeadlineSharp} from '@mui/icons-material'
    import { Link } from 'react-router-dom';
    import InputLabel from '@mui/material/InputLabel';
    import FormControl from '@mui/material/FormControl';
    import Select, { SelectChangeEvent } from '@mui/material/Select';
    import { useSelector ,useDispatch} from 'react-redux';
    import { get_Category_data  } from '../Redux/Actions/prodcutActions';
    import { useNavigate } from 'react-router-dom';
    import './css/nav.css'
    import { setProducts } from '../Redux/Actions/prodcutActions';
    
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { BarChart } from 'react-bootstrap-icons';
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
      //  vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }));
    

 

 






    export default function Nav() {
     
      
      const navigate =useNavigate()
      const [category, setCategory] = React.useState('')
      const getCategoryProducts=async(category_id:string)=>{
         if(category_id){
          
          const response:any =await axios.get(`https://fakestoreapi.com/products/category/${category_id}`)
          dispatch(setProducts(response.data))
         
         }
          }
      const getCategories=async()=>{
        const response:any =await axios.get('https://fakestoreapi.com/products/categories')
       dispatch(get_Category_data(response.data))
      }
      let cart =useSelector((state:any)=>state.cartNew.cart.length)
      React.useEffect(()=>{
        
        getCategories()
        getCategoryProducts(category)
      },[category,cart])
      const dispatch =useDispatch()
      const categories=useSelector((state:any)=>state.categories.category)
      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
     
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
      const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
    
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
        <Link className='linker' to={'/profile'}> <MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>  
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu =( 
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem  onClick={()=>{navigate('/cart')}}>
        
             
             <IconButton   size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={(cart ==undefined)?0 :cart} color="error">
               <ShoppingCart    />
              </Badge>
            </IconButton>
           
            <p> Cart</p>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Account</p>
          </MenuItem>
        </Menu>
      );
     
        function SelectSmall() {
       ;
      
        const handleChange = (event: SelectChangeEvent) => {
          setCategory(event.target.value);
        };
     
        return (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Categories</InputLabel>
            <Select className='select-items'
              labelId="demo-select-small"
              id="demo-select-small"
              value={category}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem  value="">
                <em>categories</em>
              </MenuItem>
             {
              (categories==undefined)?'':(
                categories.map((category:any)=>{
                  return <MenuItem className='item' value={category} key={category}>{category}</MenuItem>
                 })
              )
             }
            </Select>
          </FormControl>
        );
      }
    
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            
            <Toolbar>
              
           <SelectSmall/>
          
     
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
               Shopping-App
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={(cart ==undefined)?0 :cart} color="error">
                    <ShoppingCart  onClick={()=>{navigate('/cart')}}/>
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 2 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="error">
                   <NotificationsIcon /> 
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                 <ViewHeadlineSharp/>
                </IconButton>
               
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      );
    }
    

