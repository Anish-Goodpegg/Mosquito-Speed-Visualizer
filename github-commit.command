#!/bin/bash

# REPLACE THESE VALUES
TOKEN="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"
USERNAME="Anish-Goodpegg"
REPO="Anish-Goodpegg/Mosquito-Speed-Visualizer"
FILE="README.md"
BRANCH="main"

# Get SHA of existing file
SHA=$(curl -s -H "Authorization: token $TOKEN" \
https://api.github.com/repos/$REPO/contents/$FILE \
| grep '"sha"' | head -n 1 | cut -d '"' -f 4)

# Get file content and append space
CONTENT=$(curl -s -H "Authorization: token $TOKEN" \
https://api.github.com/repos/$REPO/contents/$FILE \
| grep '"content"' | head -n 1 | cut -d '"' -f 4 \
| base64 -D)

NEW_CONTENT=$(echo "$CONTENT " | base64)

# Commit the change
curl -X PUT -s -H "Authorization: token $TOKEN" \
-H "Content-Type: application/json" \
-d "{\"message\": \"Automated commit\", \"content\": \"$NEW_CONTENT\", \"sha\": \"$SHA\", \"branch\": \"$BRANCH\"}" \
https://api.github.com/repos/$REPO/contents/$FILE

echo "✅ Commit pushed to $REPO"
