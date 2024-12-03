import { Box, FormControl, Stack, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState, useCallback } from 'react';
import { Assets } from '../../config/register';
import { Label } from '../../packages/component/Label';
import { ImagePreview } from '../component/ImagePreview';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 3MB
const ALLOWED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'];

export function FileUpload({files,setFiles}) {
    const [fileSet, setFileSet] = useState(new Set());

    const handleFileChange = useCallback(async (event) => {
        const fileList = event.target.files;
        if (fileList) {
            await addImages(fileList);
        }
    }, []);


    const isFileUnique = (file) => {
        return !Array.from(fileSet).some((existingFile) => 
            existingFile.name === file.name && existingFile.size === file.size
        );
    };
    
    const addImages = async (fileList) => {
        const newFiles = Array.from(fileList).filter((file) => {
            if (fileSet.has(file)) return false;
            if(!isFileUnique(file)) return false;
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                console.error(`Unsupported file type: ${file.name}`);
                return false;
            }
            if (file.size > MAX_FILE_SIZE) {
                console.error(`File too large: ${file.name}`);
                return false;
            }
            return true;
        });
         
        if (newFiles.length > 0) {
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
            setFileSet((prevSet) => new Set([...prevSet, ...newFiles]));
        }
    };
    const handleDrop = useCallback(
        async (event) => {
            event.preventDefault();
            const droppedFiles = event.dataTransfer.files;
            if (droppedFiles) {
                await addImages(droppedFiles);
            }
        },
        [fileSet]
    );

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const removeImage = useCallback((index) => {
        if (window.confirm('Are you sure you want to remove this image?')) {
            const removedFile = files[index];
            setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
            setFileSet((prevSet) => {
                const updatedSet = new Set(prevSet);
                updatedSet.delete(removedFile);
                return updatedSet;
            });
        }
    }, [files]);

    return (
        <FormControl fullWidth sx={styles.form}>
            <Box
                justifyContent="center"
                alignItems="center"
                sx={styles.formField}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                    <img
                        src={Assets.uploadIcon}
                        alt="upload icon"
                        style={styles.uploadIcon}
                    />
                    <input
                        id="file-upload"
                        type="file"
                        accept=".png, .jpg, .gif, .svg"
                        multiple
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </label>

                <Stack direction="row" gap={2}>
                    <Label>Click to upload</Label>
                    <Label>or drag and drop a file</Label>
                </Stack>
                <Label>PNG, JPG, or GIF (max. 3MB)</Label>
            </Box>

            {files.length > 0 && (
                <Grid container spacing={1}>
                    {files.map((file, index) => (
                        <Grid item xs={11} sm={11} md={2} key={index}>
                            <Box sx={styles.imageWrapper}>
                                <ImagePreview
                                    file={URL.createObjectURL(file)}
                                    index={index}
                                    removeHandler={removeImage}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </FormControl>
    );
}

const styles = {
    formField: {
        padding: '24px 16px',
        borderStyle: 'dashed',
        borderColor: grey[400],
        borderWidth: '1px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '254px',
        gap: 2,
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    uploadIcon: {
        width: '40px',
        height: '40px',
    },
    imageWrapper: {
        width: 100,
        height: 100,
        position: 'relative',
    },
};
