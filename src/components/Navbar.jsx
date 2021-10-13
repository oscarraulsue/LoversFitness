import { List , makeStyles,Drawer,Toolbar, IconButton, Divider } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import {useState} from "react"
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { logout } from '../actions/actionLogin';



const Navbar = () => {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
       
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

        });
    }, [setIsLoggedIn])

    return (
        <div className= "containerNavbar">
        
         
         <Toolbar className={classes.toolbar}>
         <div>
         <Link 
         to= "/"
         style = {{position: "absolute", marginLeft:"-20px", marginTop:"-5px"}}
         >
          <img className={classes.log} src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633957061/Imagen1_fe0xmp.png"  alt= "Ir a facebook love fitness"/>
         </Link>
         <div style={{marginLeft: "140px"}}>
         <a href= "about">
          <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679406/facebook_gqfii0.png" className={classes.logo} alt= "Logo"/>
         </a>
         <a href= "about">
          <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679407/inst_yc3kha.png" className={classes.logo} alt= "Logo"/>
         </a>
         <a style={{marginLeft:"-2px"}} href= "about">
          <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633958065/Imagen2_wmxycr.png" className={classes.logo} alt= "Logo"/>
         </a>
         </div>
         </div>
         <List edge="end" className={classes.list}>

                <Link 
                className={classes.labelMenu}
                
                >Menu
                
                <ul className={classes.ul}>
                                <li style={{backgroundColor:"#2B2F3A", height: "13.5px", width:"200px", textDecoration:"none", color:"white", position:"absolute"}}><Link></Link></li>
								<li style={{marginTop: "17px"}}><Link>Programas</Link></li>
								<li><Link style={{textDecoration:"none", color:"white"}}>Coaches</Link></li>
								<li><Link to = "/auth/atencionmedica">Salud</Link></li>
							</ul>
                </Link>


                <Link 
                 to ="/auth/apptienda"
                 className={classes.itemMenu}
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Tienda</Link>
      
                <Link 
                 to ="/atencionmedica"
                 className={classes.itemMenu}
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Contacto</Link>

                <Link 
                 to ="/"
                 className={classes.itemMenu}
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Blog</Link>

{
                            isLoggedIn
                                ?
                                <Link
                                    onClick={() => { dispatch(logout()) }}
                                    className={classes.itemMenu}
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                >Cerrar sesión</Link>
                                :
                                <Link
                                    to="/login"
                                    className={classes.itemMenu}
                                    spy={true}
                                    smooth={true}
                                >Iniciar sesión</Link>
                        }
                
         </List>
         <IconButton edge="end" className={classes.listbottom} onClick={()=>setOpen(true)}>
        <MenuTwoToneIcon fontSize = "large" />
        </IconButton>
         </Toolbar>
         
          <Drawer anchor="right" open={open} onClose={()=>setOpen(false)} className={classes.menul}>
          <IconButton onClick={()=>setOpen(false)} className={classes.close}>
          <CancelIcon fontSize="large"  />
          </IconButton>
          <Divider />
  
          <Link 
                 to ="/"
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Menu</Link>

                <Link 
                 to ="/atencionmedica"
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Tienda</Link>
      
                <Link 
                 to ="/atencionmedica"
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Contacto</Link>

                <Link 
                 to ="/"
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Blog</Link>
                        {
                            isLoggedIn
                                ?
                                <Link
                                    onClick={() => { dispatch(logout()) }}
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                >Cerrar sesión</Link>
                                :
                                <Link
                                    to="/login"
                                    spy={true}
                                    smooth={true}
                                >Iniciar sesión</Link>
                        }
 
          </Drawer> 
        </div>  
    )
}


const useStyles = makeStyles((theme) =>({
    log:{
        width: "150px", 
        height: "88px"
    },

    labelMenu:{
        color: "#fff",
        fontSize: "1.4rem",
        fontWeight: 'bold',
        marginLeft: theme.spacing(3),
        textDecoration: "none",
            "&:hover":{
                cursor: "pointer",
                color: "#35669F",
                padding: "0 5px",
                borderBottom: "2px solid #35669F",
                borderLeft: "2px solid #35669F",
                boxShadow: "-2px 2px 5px #35669F",
                backgroundColor: "#22D9DB",
            "& ul":{
				display:"block"

        }
    },
        "& ul":{
                top: "44px",
                left: "-30px",
				display:"none",
				position:"absolute",
				minWidth:"140px",
                backgroundColor:"#0c2f5983",
                textDecoration:"none",
                listStyle: "none",
                padding:"0 20px 10px 0px",
                color:"white"
        },
        "& li":{
            minWidth:"140px",
            textDecoration:"none",

    }
    },

    root:{
        backgroundColor: "#2B2F3A",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    toolbar: {
        display: "flex",
        backgroundColor:"#2B2F3A",
    
    },
    logo:{
         width: "50px",
         height: "50px",
         marginLeft: "15px",
        "&:hover":{
            cursor:'pointer',
        }
    },
    list: {
       alignItems: "right",
       display:"flex",
       margin: "auto",
       marginRight:"0", 
    },
    listbottom: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#fff",
            position: "absolute",
            top: 0,
            right: 10,
        }
    },
   itemMenu:{
        color: "#fff",
        fontSize: "1.4rem",
        fontWeight: 'bold',
        marginLeft: theme.spacing(3),
        textDecoration: "none",
        "&:hover":{
            cursor: "pointer",
            color: "#35669F",
            padding: "0 5px",
    
            borderBottom: "2px solid #35669F",
            borderLeft: "2px solid #35669F",
            boxShadow: "-2px 2px 5px #35669F",
            backgroundColor: "#22D9DB"
        }
    },
 
    menul2:{
        color: "blue",
        width: "30vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
    },
    menul:{

        "& a":{
            margin: theme.spacing(5,0,0,4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold",
        },
        "& a:hover":{
            color: "tomato",
            cursor: "pointer",
        }

    },
    close:{
        color: "red",
        position: "absolute",
        top: 0,
        right:10,
    }
  }))

export default Navbar

