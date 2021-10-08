import { AppBar, List , makeStyles,Drawer,Toolbar, IconButton, Divider } from '@material-ui/core';
import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import InsertCommentTwoToneIcon from '@material-ui/icons/InsertCommentTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import {useState} from "react"
import CancelIcon from '@material-ui/icons/Cancel';



const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <>
        
         
         <Toolbar className={classes.toolbar}>
         <div>
         <a href= "about">
          <img src="" className={classes.logo} alt= "Logo"/>
         </a>
         <a href= "about">
          <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679406/facebook_gqfii0.png" className={classes.logo} alt= "Logo"/>
         </a>
         <a href= "about">
          <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679407/inst_yc3kha.png" className={classes.logo} alt= "Logo"/>
         </a>
         <a href= "about">
          <img src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679408/tw_ohxaz4.png" className={classes.logo} alt= "Logo"/>
         </a>
         </div>
         <List edge="end" className={classes.list}>

                <label 
                className={classes.labelMenu}
                >Menu
                <ul>
								<li><a href="">Submenu1</a></li>
								<li><a href="">Submenu2</a></li>
								<li><a href="">Submenu3</a></li>
								<li><a href="">Submenu4</a></li>
							</ul>
                </label>


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
              <Link 
                 to ="/" 
                 spy ={true} 
                 smooth={true} 
                 duration={500}
                 offset={-64}>Iniciar sesión</Link>
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
                 ActiveClass = 'active' 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Menu</Link>

                <Link 
                 to ="/atencionmedica"
                 spy ={true} 
                 ActiveClass = 'active' 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Tienda</Link>
      
                <Link 
                 to ="/atencionmedica"
                 spy ={true} 
                 ActiveClass = 'active' 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Contacto</Link>

                <Link 
                 to ="/"
                 spy ={true} 
                 ActiveClass = 'active' 
                 smooth={true} 
                 duration={500}
                  offset={-64}>Blog</Link>
                <Link 
                 to ="/" 
                 spy ={true} 
                 ActiveClass = 'active' 
                 smooth={true} 
                 duration={500}
                 offset={-64}>Iniciar sesión</Link>
 
          </Drawer> 
        </>  
    )
}


const useStyles = makeStyles((theme) =>({
    labelMenu:{
        backgroundColor:"#000",
        color:"#fff",
        textDecoration:"none",
        padding:"10px 12px",
        display:"block",
        "&:hover":{
            "& ul":{
				display:"block"

        }
    },
        "& ul":{
            
				display:"none",
				position:"absolute",
				minWidth:"140px",
                backgroundColor:"#000",
                color:"#fff",
                textDecoration:"none",
                padding:"10px 12px",
               
        },
        "& li":{
            minWidth:"140px",
            backgroundColor:"#000",
            color:"#fff",
            textDecoration:"none",
            padding:"10px 12px",
           
    }
    },

    root:{
        backgroundColor: "#FFFF",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    toolbar: {
        display: "flex",
        backgroundColor:"#002",
    
        "& img":{
            height: '3rem',
            width: "8rem",
        }
    },
    Logo:{
         objectFit: "contain",
        "&:hover":{
            cursor:'pointer',
        }
    },
    list: {
       alignItems: "right",
       display:"flex",
       margin: "auto",
       marginRight:"0", 
        [theme.breakpoints.down("sm")]: {
            display:"none"
        },
        "& a":{
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: 'bold',
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            paddingLeft: "5px",
            borderBottom: "2px solid tomato",
            borderLeft: "2px solid tomato",
            boxShadow: "-2px 2px 5px tomato"
        }
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

