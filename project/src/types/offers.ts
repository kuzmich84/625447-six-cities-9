import React from 'react';

export interface ILocation{
  latitude: number,
  longitude: number,
  zoom: number,
}

export interface ICardProps {
  city: {
    name: string,
    location: ILocation,
  },
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: {
    id: number,
    name: string,
    isPro: boolean,
    avatarUrl: string,
  },
  description: string,
  location: ILocation[],
  id: number,
}

export interface Item {
  id: string
}

export interface IStar {
  id: number,
  onChangeStar(event: React.ChangeEvent<HTMLInputElement>): void
}

export interface IOffer {
  offer: ICardProps,
  typeCard?: string,
  cardHandler(id: number):void
}

export interface IOffers {
  offers: ICardProps[]
}

