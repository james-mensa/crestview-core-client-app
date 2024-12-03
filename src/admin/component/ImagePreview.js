import { Box, Dialog, DialogActions, DialogContent, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Close as CloseIcon } from '@mui/icons-material';  
import { useState } from "react";

export const ImagePreview=({file,index,removeHandler})=>{
    const [openPreview, setOpenPreview] = useState(false); 
        const openImagePreview = () => {
            setOpenPreview(true);
        };
        const closeImagePreview = () => {
            setOpenPreview(false);
        };
    
    return(
        <Box sx={styles.imageContainer}>
            <Box>
            <img
              src={file}
              alt={`uploaded-file-${index??''}`}
              style={styles.imagePreview}
              onClick={openImagePreview}/>
              <IconButton onClick={() => removeHandler(index)} sx={styles.closeBtn}>
                 <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <Dialog open={openPreview} onClose={closeImagePreview} maxWidth="md" fullWidth>
                <DialogContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'transparent' }}>
                        <img
                            src={file}
                            alt="Preview"
                            style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

const styles={

    imagePreview:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    closeBtn:{
        position: 'absolute',
        width:30,height:30,
        top: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
    }
}