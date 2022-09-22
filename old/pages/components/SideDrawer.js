// import { Drawer } from "@mui/material";
// import React from "react";
// import { Footer } from "./Footer";

export const SideDrawer = () => {
  return;
  // return (
  //   <Drawer
  //     sx={{
  //       width: (theme) => theme.drawerWidth,
  //       flexShrink: 0,
  //       "& .MuiDrawer-paper": {
  //         width: (theme) => theme.drawerWidth,
  //         boxSizing: "border-box",
  //         border: { sm: "1px solid pink" },
  //       },
  //     }}
  //     variant="permanent"
  //     anchor="left"
  //   >
  //     <Footer />
  //   </Drawer>
  // );
};

// export const SideDrawer = ({ navItems, mobileOpen, handleDrawerToggle }) => {
//   return (
//     <Box component="nav">
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile.
//         }}
//         sx={{
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             width: 240,
//           },
//         }}
//       >
//         <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//           <Typography variant="h6" sx={{ my: 2 }}>
//             Pinfluencer
//           </Typography>
//           <Divider />
//           <List>
//             {navItems.map((item) => (
//               <ListItem key={item} disablePadding>
//                 <ListItemButton sx={{ textAlign: "center" }}>
//                   <ListItemText primary={item} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };
