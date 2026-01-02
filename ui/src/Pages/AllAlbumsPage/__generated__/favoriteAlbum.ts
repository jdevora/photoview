/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: favoriteAlbum
// ====================================================

export interface favoriteAlbum_favoriteAlbum {
  __typename: "Album";
  id: string;
  /**
   * Whether or not the album is marked as favorite by the logged in user
   */
  favorite: boolean;
}

export interface favoriteAlbum {
  /**
   * Mark or unmark an album as being a favorite
   */
  favoriteAlbum: favoriteAlbum_favoriteAlbum;
}

export interface favoriteAlbumVariables {
  albumId: string;
  favorite: boolean;
}
