import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import present from "../assets/inicio1.jpeg";
import Form from './Form';
import imgFelix from "../assets/felix.jpg";
import imgAngel from "../assets/angel.jpg";
import imgOscar from "../assets/oscar.jpg";
import Invitation2 from './Invitation2';

const Layout = () => {
    const [control, setControl] = useState(true)
    const [control2, setControl2] = useState(true)
    const [list, setList] = useState([]);

    const users = [
        {
            name: 'felix',
            img: imgFelix,
            title: 'Hola tío Félix',
            text: 'Para mis papitos tú eres muy importante, mi mami siempre me dice que una de las cosas más importante en la vida es sonreír, ellos me cuentan que estando junto a ti siempre hay muchos motivos para sonreír es por eso que ellos quieren que tú siempre me acompañes y me hagas reír mucho.',
            question: '¿Quieres ser mi padrino?'
        },
        {
            name: 'thais',
            img: imgFelix,
            title: 'Hola tía Thais',
            text: 'Para mis papitos tú eres muy importante, mi mami siempre me dice que una de las cosas más importante en la vida es sonreír, ellos me cuentan que estando junto a ti siempre hay muchos motivos para sonreír es por eso que ellos quieren que tú siempre me acompañes y me hagas reír mucho.',
            question: '¿Quieres ser mi Madrina?'
        },
        {
            name: 'angel',
            img: imgAngel,
            title: 'Hola tío Angel',
            text: 'Mis papitos me han contado que tú siempre has acompañado a mi papá en las buenas y malas, juntos siempre. Es por eso que ellos desean que también me acompañes y guíes siempre, siendo mi padrino.',
            question: '¿Quieres ser mi padrino?'
        },
        {
            name: 'dannireth',
            img: imgAngel,
            title: 'Hola tía Dannireth',
            text: 'Mis papitos me han contado que tú siempre has acompañado a mi papá en las buenas y malas, juntos siempre. Es por eso que ellos desean que también me acompañes y guíes siempre, siendo mi madrina.',
            question: '¿Quieres ser mi Madrina?'
        },
        {
            name: 'oscar',
            img: imgOscar,
            title: 'Hola tío Oscar',
            text: 'Mi papito siempre me cuenta historias y dice que eres el mejor hermano del mundo, yo quiero formar parte de esas historias y que seas el mejor tío-padrino del mundo que meguies y me acompañes por siempre .',
            question: '¿Quieres ser mi padrino?'
        },
        {
            name: 'mileidy',
            img: imgOscar,
            title: 'Hola Mileidy',
            text: 'Mi mami me contó que desde que te conoció has sido una buena amiga, es por eso que mis papitos quieren que me acompañes y guies siendo mi madrina',
            question: '¿Quieres ser mi Madrina?'
        },
    ]
    const person = users?.filter(objPerson => objPerson.name == list[0]?.name)

    return (
        <div className='w-screen h-[1110px] bg-red-300 flex flex-col items-center gap-2 p-2'>
            <div>¡Hola!</div>
            <div className='text-2xl animate-wiggle animate-infinite'>Soy Alicia</div>
            <img className='rounded-full w-60 h-40 bg-cover' src={present} alt="" />
            <div className='flex flex-col items-center'>
                <p>Tengo una pregunta importante para tí</p>
                <p className={person[0]?.title?.length ? 'hidden' : ''}>Like</p>
                <i onClick={() => setControl(prev => false)} className={`${control ? 'fa-regular' : 'fa-solid animate-jump animate-infinite'} fa-heart fa-2xl text-red-700 text-6xl`}></i>
            </div>
            <div className={` flex items-center flex-col gap-2 ${control ? 'hidden' : ''}`}>
                <p className={person[0]?.title?.length ? 'hidden' : ''}>Pero primero tienes que darme tu nombre</p>
                <Form setList={setList} person={person} setControl2={setControl2} />
            </div>
            <Invitation2 person={person[0] ? person[0] : ''} control2={control2} />
            <Outlet />
        </div>
    )
}

export default Layout