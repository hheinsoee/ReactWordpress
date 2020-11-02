import { Chip } from '@material-ui/core';
import { CalendarToday } from '@material-ui/icons';
import HistoryIcon from '@material-ui/icons/History';
import React from 'react'


// use <Time time='' ago/>

export function Time(props){
    const t = props.time;
    const type = props.ago;
    return<>{type ? (<Ago {...timedifferent(t)}/>):(<><DateTime {...date(t)}/></>)}</>
}

let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let short_month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const date = (prop) => {
    return{
        d : ("0" + new Date(prop).getDate()).slice(-2),
        m : monthNames[new Date(prop).getMonth()].slice(0, 3),
        y : new Date(prop).getFullYear(),
        h : ("0" + new Date(prop).getHours()).slice(-2),
        mi : ("0" + new Date(prop).getMinutes()).slice(-2),
    }
}
const DateTime = (p) =>{
    return(
        <>
        <Chip
            size="small"
            label={`${p.h}:${p.mi} - ${p.d} ${p.m} ${p.y}`}
            variant='outlined'
        />
        </>
    )
}

const timedifferent = (prop) =>{
    const now = new Date();
    const postTime = new Date(prop);
    const diff = now - postTime;

    var msec = diff;
    var yy = Math.floor(msec / 1000 / 60 / 60/ 24 /30 /12);
    msec -= yy * 1000 * 60 * 60 * 24 * 30* 12;
    
    var mo = Math.floor(msec / 1000 / 60 / 60/ 24 /30);
    msec -= mo * 1000 * 60 * 60 * 24 * 30;

    var dd = Math.floor(msec / 1000 / 60 / 60/ 24);
    msec -= dd * 1000 * 60 * 60 * 24;

    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;

    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;

    return{yy,mo,dd,hh,mm,diff}
}
const Ago = (p) =>{

    const yy = p.yy>0?(`${p.yy}y `):('');
    const mo = p.mo>0?(`${p.mo}m `):('');
    const dd = p.dd>0?(`${p.dd}d `):('');
    const hh = p.hh>0?(`${p.hh}h `):('');
    const mm = p.mm>=0?(`${p.mm}m`):('');
    const long = `${yy}${mo}${dd}${hh}${mm}`;

    
    const short = p.yy>0?(`${p.yy}y `):(
            p.mo>0?(`${p.mo}m `):(
                p.dd>0?(`${p.dd}d `):(
                    p.hh>0?(`${p.hh}h `):(
                        p.mm>0?(`${p.mm}m`):('now')
                    )
                )
            )
        );
    const color = p.diff<(12*60*60*1000)?("primary"):('default')
    return(
        <Chip
            style={{opacity:'0.85'}}
            size="small"
            icon={<HistoryIcon size='small'/>}
            label={short}
            color={color}
        />
    )
}