import { Box, FormControl, Stack, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState, useCallback } from 'react';
import { Assets } from '../../config/register';
import { Label } from '../../packages/component/Label';
import { imageFileToBase64 } from '../utils/imageToBase64';
import { ImagePreview } from '../component/ImagePreview';

export function FileUpload({files,setFiles}) {
    const [fileSet, setFileSet] = useState(new Set());

    const handleFileChange = useCallback(async (event) => {
        const fileList = event.target.files;
        if (fileList) {
            await addBase64Images(fileList);
        }
    }, []);


    const addBase64Images = async (fileList) => {
        try {
            const convertedImages = await Promise.all(
                Array.from(fileList).map(async (file) => {
                    const base64Image = await imageFileToBase64(file);
                    return `data:image/png;base64,${base64Image}`;
                })
            );
            const newFiles = convertedImages.filter((file) => !fileSet.has(file));
            if (newFiles.length > 0) {
                setFiles((prevFiles) => [...prevFiles, ...newFiles]);
                setFileSet((prevSet) => new Set([...prevSet, ...newFiles]));
            }
        } catch (error) {
            console.error("Error converting files to base64", error);
        }
    };

    const handleDrop = useCallback(
        async (event) => {
            event.preventDefault();
            const droppedFiles = event.dataTransfer.files;
            if (droppedFiles) {
                await addBase64Images(droppedFiles);
            }
        },
        [fileSet]
    );

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const removeImage = useCallback((index) => {
        const removedFile = files[index];
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        setFileSet((prevSet) => {
            const updatedSet = new Set(prevSet);
            updatedSet.delete(removedFile);
            return updatedSet;
        });
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
                                    file={file}
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
