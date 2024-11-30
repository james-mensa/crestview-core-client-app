import { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack } from "@mui/material";
import { Label } from "../../packages/component/Label";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { HorizontalDivider } from "./Divider";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ColorTheme } from '../../style/ColorTheme';
import { InfoButton } from '../../packages/component/Button';
import { useCloseModel } from '../../packages/hooks/useCloseModel';
export const Filter = ({ setValues, value, isVisible, onClose }) => {
    const [previousValue, setPreviousValue] = useState(value);
    useEffect(() => {
        setPreviousValue(value);
    }, []);
    const containerRef = useRef(null);

    const handleApply = useCallback((key, value) => {
        setValues((prev) => ({
            ...prev,
            [key]: value
        }));
    }, [setValues]);
    const handleRoomChange = (value) => {
        handleApply('rooms', value);
    };
    const handleAdultsChange = (value) => {
        handleApply('adults', value);
    };
    const handleReset = () => {
        setValues(previousValue);
    };
    const handleChildrenChange = (value) => {
        handleApply('children', value);
    };

    useCloseModel(containerRef,onClose);

    if (!isVisible) {
        return null; // Return null if the filter is not visible.
    }

    const isFilterUpdated = () =>{ 
        return previousValue !== value;}
    const __resetButtonStyle=resetButtonStyle(isFilterUpdated())
    return (
        <Box ref={containerRef} sx={styles.container}>
            <Stack>
                <Stack sx={styles.placeholder} direction={'row'} alignItems={"center"} spacing={2}>
                    
                    <IconButton>
                    <KeyboardArrowLeftIcon/>
                    </IconButton>
                    
                   
                    <Label>
                        Guests and Rooms
                    </Label>

                </Stack>

                <Stack>
                <Selector 
                    title="Rooms" 
                    value={value.rooms} 
                    onChange={handleRoomChange}
                    min={1}
                />
                <Selector 
                    title="Adults" 
                    value={value.adults} 
                    onChange={handleAdultsChange}
                    min={1}
                    max={5}
                />
                <Selector 
                    title="Children" 
                    value={value.children} 
                    onChange={handleChildrenChange}
                    min={0}
                    max={5}
                />
            </Stack>
            </Stack>
          
        
            <HorizontalDivider />

            <Stack direction="row" justifyContent="space-between" spacing={2}>
                <IconButton onClick={handleReset}>
                    <Label sx={__resetButtonStyle.label}>Reset</Label>
                </IconButton>
                <InfoButton label="Apply" onClick={handleApplyFilters} />
            </Stack>
        </Box>
    );

    function handleApplyFilters() {
        onClose(); // Optionally close the filter after applying
    }
};

const Selector = ({ title, onChange, value, min, max }) => {
    const handleIncrement = () => {
        if (!max || value < max) {
            onChange(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };

    return (
        <Box sx={styles.selectorContainer}>
            <Label sx={styles.selectorTitle}>{title}</Label>
            <Stack direction="row" alignItems="center" spacing={3}>
                <IconButton
                    sx={styles.button}
                    onClick={handleDecrement}
                    disabled={value <= min}
                    aria-label={`Decrease ${title}`}
                >
                    <RemoveIcon />
                </IconButton>
                <Box sx={styles.valueCard}>
                    <Label sx={styles.value}>{value}</Label>
                </Box>
                <IconButton
                    sx={styles.button}
                    onClick={handleIncrement}
                    aria-label={`Increase ${title}`}
                >
                    <AddIcon />
                </IconButton>
            </Stack>
        </Box>
    );
};

Filter.propTypes = {
    setValues: PropTypes.func.isRequired,
    value: PropTypes.shape({
        rooms: PropTypes.number,
        adults: PropTypes.number,
        children: PropTypes.number,
    }),
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

Filter.defaultProps = {}

const styles = {
    container: (theme) => ({
        backgroundColor: ColorTheme.background.light,
        display: "flex",
        flexDirection: "column",
       
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            marginTop: '70px',
            borderRadius: "10px",
            padding: '20px 30px',
            border: `1px solid ${ColorTheme.dark[300]}`,
            gap: 2,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            marginTop: 0,
            zIndex: 1000,
            justifyContent:'space-between',
            padding:'20px 20px'
        },
    }),
    placeholder:(theme)=>({

        [theme.breakpoints.up('sm')]: {
    display: 'none',
        },
    }),
    selectorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        gap: 10,
    },
    selectorTitle: {
        fontWeight: '600',
    },
    button: {
        borderRadius: '20px',
        border: '1px solid',
        width: '35px',
        height: '35px',
    },
    valueCard: {
        borderRadius: '3px',
        border: `1px solid ${ColorTheme.dark[500]}`,
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    value: {
        fontWeight: '600',
    },
    reset:{
     
    }
};
const resetButtonStyle=(isActive)=>{
    return{

        label:{
            fontWeight: '600',
            color:isActive? 'red':'blue',
            cursor:'pointer',
            fontSize:'14px'
        }
    }

  
}