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

interface ICreatPost {
    image: File | undefined,
    text: string,
    lesson_num: number,
    title: string,
    description: string,
}

interface IBook {
    title: string,
    subtitle: string,
    isbn13?: string,
    price: string,
    image: string,
    url?: string,
}

interface IBooksState {
    books: IBook[],
    limit: number,
}

interface IBooksInfo {
    limit: number,
}

interface IBooksResponse {
    count: number,
    books: IBook[],
}

interface IStoreStateBooks {
    books: IBooksState,
    limit: number,
}

export type {
    IButton,
    IInput,
    ISignUp,
    IUser,
    IActivationInfo,
    ISignInUserInfo,
    IUserState,
    ICreatPost,
    IBook,
    IBooksState,
    IBooksInfo,
    IBooksResponse,
    IStoreStateBooks,
}


