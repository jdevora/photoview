import React from 'react'
import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import { FAVORITE_ALBUM_MUTATION } from '../../Pages/AllAlbumsPage/AlbumsPage'

const FavoriteButton = styled.button`
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  opacity: 0;
  transition: opacity 0.2s, background 0.2s;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  svg {
    transition: fill 0.2s;
  }
`

interface AlbumFavoriteButtonProps {
  albumId: string
  isFavorite: boolean
}

export const AlbumFavoriteButton = ({
  albumId,
  isFavorite,
}: AlbumFavoriteButtonProps) => {
  const [favoriteAlbum] = useMutation(FAVORITE_ALBUM_MUTATION, {
    optimisticResponse: {
      __typename: 'Mutation',
      favoriteAlbum: {
        __typename: 'Album',
        id: albumId,
        favorite: !isFavorite,
      },
    },
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    favoriteAlbum({
      variables: {
        albumId,
        favorite: !isFavorite,
      },
    })
  }

  return (
    <FavoriteButton
      onClick={handleClick}
      className="album-favorite-button"
      style={{ opacity: isFavorite ? '0.75' : undefined }}
    >
      <svg
        width="20px"
        height="18px"
        viewBox="0 0 19 17"
        version="1.1"
      >
        <path
          d="M13.999086,1 C15.0573371,1 16.0710089,1.43342987 16.8190212,2.20112483 C17.5765039,2.97781012 18,4.03198704 18,5.13009709 C18,6.22820714 17.5765039,7.28238406 16.8188574,8.05923734 L16.8188574,8.05923734 L15.8553647,9.04761889 L9.49975689,15.5674041 L3.14414912,9.04761889 L2.18065643,8.05923735 C1.39216493,7.2503776 0.999999992,6.18971057 1,5.13009711 C1.00000001,4.07048366 1.39216496,3.00981663 2.18065647,2.20095689 C2.95931483,1.40218431 3.97927681,1.00049878 5.00042783,1.00049878 C6.02157882,1.00049878 7.04154078,1.4021843 7.82019912,2.20095684 L7.82019912,2.20095684 L9.4997569,3.92390079 L11.1794784,2.20078881 C11.9271631,1.43342987 12.9408349,1 13.999086,1 L13.999086,1 Z"
          fill={isFavorite ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={isFavorite ? '0' : '2'}
        ></path>
      </svg>
    </FavoriteButton>
  )
}
