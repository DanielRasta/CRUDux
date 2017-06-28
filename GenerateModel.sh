MODEL_NAME=$1
MODEL_NAME_UPPER="$(tr [a-z] [A-Z]<<< "$MODEL_NAME")"
MODEL_NAME_LOWER="$(tr [A-Z] [a-z]<<< "$MODEL_NAME")"
PLURAL_SUFFIX="s"


DIRECTORY_NAME="$MODEL_NAME$PLURAL_SUFFIX"


function replace_variables {
  sed -i "" "s/%%model_name_upper%%/${MODEL_NAME_UPPER}/g" $1 
  sed -i "" "s/%%model_name_lower%%/${MODEL_NAME_LOWER}/g" $1
  sed -i "" "s/%%model_name_camel%%/${MODEL_NAME}/g" $1
} 


echo "Creating $MODEL_NAME CRUDuX files.."

echo "Creating Dir Tree"
mkdir $DIRECTORY_NAME
mkdir "$DIRECTORY_NAME/actions"
mkdir "$DIRECTORY_NAME/components"
mkdir "$DIRECTORY_NAME/reducers"

echo "Creating Actions"
cp Template/actions/crud.js "$DIRECTORY_NAME/actions/crud.js"

replace_variables "$DIRECTORY_NAME/actions/crud.js"


echo "Creating Reducers"
cp Template/reducers/error-model-reducer.js "$DIRECTORY_NAME/reducers/error-$MODEL_NAME_LOWER-reducer.js"
cp Template/reducers/single-model-reducer.js "$DIRECTORY_NAME/reducers/single-$MODEL_NAME_LOWER-reducer.js"
cp Template/reducers/model-reducer.js "$DIRECTORY_NAME/reducers/$MODEL_NAME_LOWER-reducer.js"

replace_variables "$DIRECTORY_NAME/reducers/error-$MODEL_NAME_LOWER-reducer.js"
replace_variables "$DIRECTORY_NAME/reducers/single-$MODEL_NAME_LOWER-reducer.js"
replace_variables "$DIRECTORY_NAME/reducers/$MODEL_NAME_LOWER-reducer.js"



echo "Creating Components"
cp -r Template/components "$DIRECTORY_NAME"
replace_variables "$DIRECTORY_NAME/components/new.js"
replace_variables "$DIRECTORY_NAME/components/index.js"
replace_variables "$DIRECTORY_NAME/components/instance.js"
replace_variables "$DIRECTORY_NAME/components/update.js"


echo "Running npm-install"
sh npm_prerequisites.sh
