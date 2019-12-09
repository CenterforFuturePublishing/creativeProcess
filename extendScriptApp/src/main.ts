/// <reference types="types-for-adobe/illustrator/2015.3"/>
/// <reference types="../../ISharedData"/>

declare const sharedDate: ISharedData

interface PathItems {
  /**
   * Create an elliptical path item.
   * @param top The ellipse's bounds.
   * @param left The ellipse's bounds.
   * @param width The ellipse's bounds.
   * @param height The height of the ellipse.
   * @param reversed Is the ellipse path reversed?
   * @param inscribed Is the ellipse path inscribed?
   */
  ellipse(
    top?: number,
    left?: number,
    width?: number,
    height?: number,
    reversed?: boolean,
    inscribed?: boolean,
  ): PathItem

  /**
   * Used to create a regular polygon path item. Not for path item access.
   * @param centerX
   * @param centerY
   * @param radius The radius of the polygon points.
   * @param sides The number of sides on the polygon.
   * @param reversed Is the polygon path reversed?
   */
   polygon(
    centerX?: number,
    centerY?: number,
    radius?: number,
    sides?: number,
    reversed?: boolean,
  ): PathItem

  /**
   * Used to create a rectangular path item. Not for path item access.
   * @param top The top coordinate of the rectangle's bounds.
   * @param left The left coordinate of the rectangle's bounds.
   * @param width The width of the rectangle.
   * @param height The height of the rectangle.
   * @param reversed Is the rectangle path reversed?
   */
   rectangle(
    top: number,
    left: number,
    width: number,
    height: number,
    reversed?: boolean,
  ): PathItem

  /**
   * Used to create a rounded-corner rectangular path item. Not for path item access.
   * @param top
   * @param left
   * @param width
   * @param height
   * @param horizontalRadius Horizontal corner radius.
   * @param verticalRadius Vertical corner radius.
   * @param reversed Is the rectangle path reversed?
   */
   roundedRectangle(
    top: number,
    left: number,
    width: number,
    height: number,
    horizontalRadius?: number,
    verticalRadius?: number,
    reversed?: boolean,
  ): PathItem

  /**
   * Used to create a star-shaped path item. Not for path item access.
   * @param centerX
   * @param centerY
   * @param radius The outside radius of the star points.
   * @param innerRadius The inside radius of the star points.
   * @param points The number of points on the star.
   * @param reversed Is the star path reversed?
   */
   star(
    centerX?: number,
    centerY?: number,
    radius?: number,
    innerRadius?: number,
    points?: number,
    reversed?: boolean,
  ): PathItem
}

interface TextFont {
  axisVector: any
}

// close all current opening documents
const arrayOfDocuments = app.documents
for(let document of arrayOfDocuments) {
  if(document instanceof Document) {
    document.close(SaveOptions.DONOTSAVECHANGES)
  }
}

const newDoc = app.documents.add(
  DocumentColorSpace.CMYK,
  sharedDate.width,
  sharedDate.height,
  1
)

for(let i = 0; i < newDoc.artboards.length; i++) {

  const artBoard: Artboard = newDoc.artboards[i]

  const rect = newDoc.pathItems.rectangle( 0, 0, sharedDate.width, sharedDate.height);

  artBoard.artboardRect = rect.geometricBounds
}

let textFrame = newDoc.textFrames.add()
textFrame.contents = sharedDate.textContent
textFrame.top = 0
textFrame.left = 0


const stringOf_TextFont_Object = getInfoOfObject(textFrame.textRange.characterAttributes.textFont)

let listOfFonts = ""

for(const font of app.textFonts) {
  listOfFonts += `
  ${font.name}`
}

const fontToUsed = app.textFonts.getByName("SourceSerifVariable-Roman")

fontToUsed.axisVector = 200.10

textFrame.textRange.characterAttributes.textFont = fontToUsed

getInfoOfObject(fontToUsed)


// newDoc.close()

function getInfoOfObject(test: any) {
  let stringToReturn = ""

  for(const testKey in test) {
    if(test.hasOwnProperty(testKey)) {
      // @ts-ignore
      stringToReturn += `${testKey}: ${test[testKey]}; `
    }
  }
  return stringToReturn
}
