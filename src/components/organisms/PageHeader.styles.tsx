import { SxProps } from "@mui/material"

const styles: { [key: string] : React.CSSProperties & SxProps} = {
  header: {
    position: "sticky",
    zIndex: 100
  },
  headerContainer: {backgroundColor: "#000000"},
  appBar: {
    backgroundColor: '#3E4750',
    transition: 'background-color 0.3s ease-in-out',
  },
  appBarSticky: {
    backgroundColor: '#00000055',
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  toolbar: {
    transition: 'height 0.3s ease-in-out',
  },
  toolbarSticky: {
    transition: 'height 0.3s ease-in-out',
  },
  navLink: {
    color: "#DFDFDF",
    fontFamily: "Libre Franklin",
    fontWeight: "500"
  }
}

export default styles