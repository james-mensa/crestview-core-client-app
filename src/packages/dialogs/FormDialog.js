import { observer } from "mobx-react-lite";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { formDialogStore } from "../../mobx-store/formDialogStore";
import { Box,  } from "@mui/material";
const Transition = React.forwardRef(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const  FormDialog=observer(()=> {
  const handleClose = () => {
    formDialogStore.close();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={formDialogStore.isFullScreen}
        open={formDialogStore.isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
     <Box>{formDialogStore.component}</Box>
      </Dialog>
    </React.Fragment>
  );
})

export default FormDialog