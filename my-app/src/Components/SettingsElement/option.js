import React, {useState, useEffect } from "react";
import { Switch, Slider, Grid, FormGroup, FormControlLabel } from '@mui/material';
import Cookies from "universal-cookie"

import "./option.css"

const StyleSlider = (props) => {
    const cookies = new Cookies();
    let optionType = props.type;
    let optionValue = props.type + "Value";
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
        cookies.set(optionValue, newValue,  {path: '/'});
    };

    useEffect(() => {
        const testCookie = cookies.get(optionValue);
        
        if (testCookie) {
          setSliderValue(parseInt(testCookie));
        };
      });

    const [enabled, setEnabled] = useState(false);

    const handleSwitch = (event) => {
        setEnabled(event.target.checked);
        cookies.set(optionType, event.target.checked.toString(), { path: "/" });
        if(!event.target.checked) {
            setSliderValue(0);
            cookies.set(optionValue, 0,  {path: '/'});
        } 
    };

    useEffect(() => {
        const enabledCookie = cookies.get(optionType);
        if (enabledCookie !== undefined) {
            setEnabled(enabledCookie === "true");
        };
    });

    return(
        <>
            <FormGroup className="slider-container">
                <Grid spacing={3} container={true} className='op'>
                    <Grid item xs={3}>
                        <FormControlLabel 
                            control={<Switch
                                onChange={handleSwitch}
                                checked={enabled}
                            />
                            } 
                            label={props.type}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Slider
                            aria-label={props.type}
                            defaultValue={parseInt(cookies.get(optionValue))}
                            value={sliderValue}
                            min={0}
                            max={4}
                            marks={[
                                {value: 0, label: "Not allergic"},
                                {value: 1, label: "Slight Reaction"},
                                {value: 2, label: "Mild Reaction"},
                                {value: 3,label: "Bad Reaction"},
                                {value: 4,label: "Severely Allergic"}
                            ]}
                            valueLabelDisplay="auto"
                            size="small"
                            onChange={handleSliderChange}
                            disabled={!enabled}
                            />
                    </Grid>
                </Grid>    
            </FormGroup>
        </>
    );
}


export default StyleSlider