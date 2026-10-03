import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.{ts,tsx}');

const files = project.getSourceFiles();

function isAbsolutePath(value: string) {
    const layers = ['app', 'shared', 'features', 'widgets', 'pages'];
    return layers.some(layer => value.startsWith(layer));
}

files.forEach(file => {
    const imports = file.getImportDeclarations();

    imports.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolutePath(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();