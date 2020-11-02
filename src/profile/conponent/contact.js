import React from 'react';
import { Chip, GridList } from '@material-ui/core';
import { Email, Facebook, Map, Message, PhoneAndroid, Sms } from "@material-ui/icons";

export default function Contact(){
    return(
        <div className='_pxy '>
        <div>
            ဖုန်း
            <div className="_my _list">
                <Chip variant="outlined" icon={<PhoneAndroid/>} clickable component="a" href="tel:+09252152447" label="09252152447"/><br/>
                <Chip variant="outlined" icon={<PhoneAndroid/>} clickable component="a" href="tel:+09252152447" label="09252152447"/>
                <div><small>နံနက် ၅း၀၀ မှ ည ၁၂း၀၀ ထိ ဖုန်းခေါ်ဆိုနိုင်ပါဗျလ်</small></div>
            </div>
        </div>
        
        <div>
            စာပို့ရန်
            <div className="_my _list">
            <Chip variant="outlined" icon={<Message/>} clickable component="a" href="" label="Facebook Messenger"/><br/>
            <Chip variant="outlined" icon={<Sms/>} clickable component="a" href="" label="SMS"/><br/>
            <Chip variant="outlined" icon={<Email/>} clickable component="a" href="mailto:info@htooseafood.com" label="info@htooseafood.com"/>
            </div>
        </div>
        <div>
            မြေပုံ
            <div className="_my _list">
            <Chip variant="outlined" icon={<Map/>} clickable label="Google Map"/>
            </div>
        </div>
        <div>
            လူမှုကွန်ယက်များ
            <div className="_my _list">
            <Chip variant="outlined" icon={<Facebook/>} clickable component="a" href="" label="Facebook"/>
            </div>
        </div>
        </div>
    )
}