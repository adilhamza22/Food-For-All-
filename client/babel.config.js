// export const presets = ['@babel/preset-env', '@babel/preset-react'];
// export const plugins = ['react-hot-loader/babel'];
export const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current'
            }
        }
    ]
];