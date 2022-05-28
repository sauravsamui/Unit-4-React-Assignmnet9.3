import React from 'react'
import {AppStyled,Div,Span} from "../App.styles.js"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  
  } from '@chakra-ui/react'
function DrawerLeft() {
  
        
        
      
        return (
          <>
            <Drawer
              isOpen="Open"
              placement='left'
            
              size="xs"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Logo</DrawerHeader>
      
                <DrawerBody>
                  <AppStyled>
                  <Div>
                  <i className="material-icons">home</i>
                  <Span>Home</Span>
                  
                  </Div>
                  <Div>
                  <i className="material-icons">trending_up</i>
                  
                  <Span>Trending</Span>
                  
                  </Div>
                  <Div>
                  <i className="material-icons">explore</i>
                 
                  <Span> Explore</Span>
                  </Div>
                  <Div>
                  <i className="material-icons">star</i>
                   
                    <Span> Favourites</Span>
                  </Div>
                  <Div>
                  <i className="material-icons">settings</i>
                  
                  <Span>Settings</Span>
                  </Div>
                  </AppStyled>
                
                 
               {/* <Div></Div> */}
                </DrawerBody>
      
               
              </DrawerContent>
            </Drawer>
          </>
        )
      }
export default DrawerLeft