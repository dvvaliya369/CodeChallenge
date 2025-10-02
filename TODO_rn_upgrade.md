# React Native Upgrade TODO

## Current Status
- React Native version: 0.64.2 (old)
- React version: 17.0.1
- Target: Latest React Native version (0.75.x)

## Upgrade Steps

### 1. Analysis Phase
- [ ] Check current dependencies and their compatibility
- [ ] Review React Native changelog for breaking changes
- [ ] Identify deprecated packages that need replacement

### 2. Pre-upgrade Preparation
- [ ] Create backup of current package.json
- [ ] Document current working state
- [ ] Check for any custom native code modifications

### 3. Package Updates
- [ ] Update React Native to latest version
- [ ] Update React to compatible version
- [ ] Update React Navigation (v5 → v6)
- [ ] Update other core dependencies
- [ ] Replace deprecated packages

### 4. Configuration Updates
- [ ] Update Metro config
- [ ] Update Babel config
- [ ] Update Android build files
- [ ] Update iOS build files

### 5. Code Migration
- [ ] Fix breaking changes in navigation
- [ ] Update deprecated API usage
- [ ] Fix any TypeScript/ESLint issues
- [ ] Update test configurations

### 6. Testing & Validation
- [ ] Test build process
- [ ] Verify all features work
- [ ] Check for runtime errors
- [ ] Test on both platforms if possible

## Notes
- This is a major version jump (0.64 → 0.75+)
- Expect significant breaking changes
- React Navigation v5 → v6 migration needed
- Some packages may need complete replacement
