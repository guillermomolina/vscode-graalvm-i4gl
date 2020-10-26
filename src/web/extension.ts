/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import { GraalVMDebugAdapterDescriptorFactory, GraalVMDebugAdapterTracker } from '../graalVMDebug';
import { I4GLConfigDocumentSymbolProvider } from '../i4glDocumentSymbolProvider';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory('graalvm', new GraalVMDebugAdapterDescriptorFactory()));
	context.subscriptions.push(vscode.debug.registerDebugAdapterTrackerFactory('graalvm', new GraalVMDebugAdapterTracker()));
	context.subscriptions.push(
		vscode.languages.registerDocumentSymbolProvider(
			{
				scheme: "file",
				language: "i4gl",
			},
			new I4GLConfigDocumentSymbolProvider()
		)
	);
}

export function deactivate() {
	// nothing to do
}
