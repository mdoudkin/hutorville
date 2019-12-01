import React from 'react'
import SEO from '../components/seo'

const data = [
  {
    name: 'Качотта',
    description: 'Классика жанра, вкусный сыр',
    price: 1100,
    weight: true,
    properties: ['hard', 'table'],
    variations: ['классическая', 'с пожитником', 'с паприкой'],
  },
  {
    name: 'Белпер Кнолле',
    description: 'Классика жанра, вкусный сыр',
    price: 160,
    weight: false,
    properties: ['hard', 'pronounced'],
    variations: ['с черным перцем', 'с хмели-сунели', 'с кунжутом'],
  },
  {
    name: 'Скаморца',
    description: 'Классика жанра, вкусный сыр',
    price: 350,
    weight: false,
    properties: ['hard', 'table'],
    variations: [],
  },
  {
    name: 'Камамбер',
    description: 'Классика жанра, вкусный сыр',
    price: 200,
    weight: false,
    properties: ['soft', 'mold'],
    variations: [],
  },
  {
    name: 'Шанклиш',
    description: 'Классика жанра, вкусный сыр',
    price: 400,
    weight: false,
    properties: ['soft', 'pronounced'],
    variations: [],
  },
  {
    name: 'Гауда',
    description: 'Классика жанра, вкусный сыр',
    price: 2000,
    weight: true,
    properties: ['hard', 'table'],
    variations: [],
  },
]

export default () => (
  <>
    <SEO title="Выбрать сыр" />
    WELCOME TO THE STORE!
  </>
)
