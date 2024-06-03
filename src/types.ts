interface IButton {
    children: string,
    className: string,
    isActive?: boolean,
    onClick: Function,
}

export enum INPUT_TYPES {
    TEXTAREA = 'textarea',
    PASSWORD = 'password',
    NUMBER = 'number',
    TEXT = 'text',
}

interface IInput {
    label: string,
    placeholder: string,
    value: string | number,
    onChange: Function,
    type: INPUT_TYPES,
    disabled?: boolean,
    errorMessage?: string,
    className?: string,
}

export enum POST_TIPES {
    DETAIL = 'postDetal',
    VERTICAL = 'postVertical',
    SMALL = 'postSmall',
    BIG = 'big',
}

interface ISignUp {
    username: string,
    password: string,
    email: string,
}

interface IUser {
    username: string,
    id: number,
    email: string,
}

interface IActivationInfo {
    uid: string,
    token: string,
}

interface ISignInUserInfo {
    email: string,
    password: string,
}

interface IUserState {
    user: IUser,
}

export interface IFileLoader {
    image: ImageType,
    outerOnChange: Function,
    outerOnRemove: Function,
}

export interface ImageType {
    dataURL?: string;
    file?: File;
}

interface IBook {
    title: string,
    subtitle: string,
    isbn13: number,
    price: number,
    image: string,
    url?: string,
}

interface IBooksState {
    books: IBook[],
    limit: number,
    bigBook: IBigBook,
    cart: ICart[],
    likeBook: ILIkeBook[],
    currentPage: number,
}

interface IBooksInfo {
    limit: number,
    search?: string | null,
    currentPage: number,
}

interface IBooksResponse {
    count: number,
    books: IBook[],
}

interface IStoreStateBooks {
    books: IBooksState,
    limit: number,
    cart: ICartState,
    currentPage: number,
}

interface IBigBook {
    error?: string;
    title: string;
    subtitle?: string;
    authors: string;
    publisher?: string;
    isbn10?: number;
    isbn13: number;
    pages?: number;
    year?: number;
    rating?: number;
    desc?: string;
    price: number;
    image: string;
    url?: string;
    pdf?: {
        [key: string]: string;
    };
}

interface ICart {
    isbn13: number;
    title: string;
    price: number;
    authors: string;
    image: string;
    quan: number;
}

interface ICartState {
    cart: ICart[];
}

interface ILIkeBook {
    isbn13: number;
    title: string;
    price: number;
    authors: string;
    image: string;
}

interface ILikeBookState {
    likeBook: ILIkeBook[],
}

export type {
    IButton,
    IInput,
    ISignUp,
    IUser,
    IActivationInfo,
    ISignInUserInfo,
    IUserState,
    IBook,
    IBooksState,
    IBooksInfo,
    IBooksResponse,
    IStoreStateBooks,
    IBigBook,
    ICart,
    ICartState,
    ILIkeBook,
    ILikeBookState,
}


