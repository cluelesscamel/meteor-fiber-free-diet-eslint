module.exports = {
	type: 'suggestion',
	docs: {
		description: 'Migrate away from fibers'
	},
	create(context) {
		return {
			'MemberExpression > Identifier': function(node) {
				//createIndex
				if (node.name.toLowerCase() == 'createindex') {
					return context.report({
						node,
						message: 'use createIndexAsync instead',
						data: node
					});
				}
				//insert
				if (node.name.toLowerCase() == 'insert') {
					return context.report({
						node,
						message: 'use insertAsync instead',
						data: node
					});
				}
				//findOne
				if (node.name.toLowerCase() == 'findone') {
					return context.report({
						node,
						message: 'use findOneAsync instead',
						data: node
					});
				}
				//update
				if (node.name.toLowerCase() == 'update') {
					return context.report({
						node,
						message: 'use updateAsync instead',
						data: node
					});
				}
				//remove
				if (node.name.toLowerCase() == 'remove') {
					return context.report({
						node,
						message: 'use removeAsync instead',
						data: node
					});
				}
				//count
				if (node.name.toLowerCase() == 'count') {
					return context.report({
						node,
						message: 'use countAsync instead',
						data: node
					});
				}
				//fetch
				if (node.name.toLowerCase() == 'fetch') {
					return context.report({
						node,
						message: 'use fetchAsync instead',
						data: node
					});
				}
				//map and foreach are a bit dangerous, no?

				//validatedMethod call
				if (node.name.toLowerCase() == 'call') {
					return context.report({
						node,
						message: 'use the async mixin',
						data: node
					});
				}

				
				//2.9 changes
				if (node.name.toLowerCase() == 'user') {
					return context.report({
						node,
						message: 'use userAsync instead',
						data: node
					});
				}
				return null;
			},
		};
	},
};
