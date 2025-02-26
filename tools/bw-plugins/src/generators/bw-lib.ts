import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  logger,
  names
} from '@nx/devkit';
import * as path from 'path';
import { libraryGenerator } from '@nx/angular/generators';
import { BwLibGeneratorSchema } from './schema';

export async function bwLibGenerator(
  tree: Tree,
  options: BwLibGeneratorSchema
) {
  // Error Handling for Required Fields
  if (!options.domain) {
    throw new Error('The "domain" option is required. Please provide a domain for the library.');
  }
  if (!options.name) {
    throw new Error('The "name" option is required. Please provide a name for the library.');
  }
  if (!options.type) {
    throw new Error('The "type" option is required. Please provide a type for the library (feature, core, ui, or data-access).');
  }

  // Validate type
  const allowedTypes = ['feature', 'core', 'ui', 'data-access'];
  if (!allowedTypes.includes(options.type)) {
    throw new Error(
      `Invalid "type" provided: "${options.type}". Allowed types are: ${allowedTypes.join(', ')}.`
    );
  }

  // Construct Path and Name
  const projectRoot = `libs/${options.domain}/${options.name}-${options.type}`;
  const projectName = `${options.domain}-${options.name}-${options.type}`;
  const importPath = `@bw/${options.name}-${options.type}`;

  // Generate Angular Library using Nx's Angular Library Generator
  await libraryGenerator(tree, {
    name: options.name,
    directory: projectRoot,
    tags: `${options.type}`,
    style: 'scss',
    standaloneConfig: true,
    changeDetection: 'OnPush',
    importPath: importPath,
    prefix: names(options.name).propertyName
  });

  // Adjust Configuration
  addProjectConfiguration(tree, projectName, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {
      build: {
        executor: '@angular-devkit/build-angular:ng-packagr',
        outputs: [`{options.outputPath}`],
        options: {
          tsConfig: `${projectRoot}/tsconfig.lib.json`,
          project: `${projectRoot}/ng-package.json`
        }
      }
    },
    tags: [options.type]
  });

  // Generate Additional Files
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  // Format Files
  await formatFiles(tree);

  logger.info(`Angular library created at: ${projectRoot}`);
  logger.info(`Import path: ${importPath}`);
}

export default bwLibGenerator;
