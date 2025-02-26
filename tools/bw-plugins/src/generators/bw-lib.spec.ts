import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { bwLibGenerator } from './bw-lib';
import { BwLibGeneratorSchema } from './schema';

describe('bw-lib generator', () => {
  let tree: Tree;
  const options: BwLibGeneratorSchema = { name: 'test',type:'ui',domain:'a' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await bwLibGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
