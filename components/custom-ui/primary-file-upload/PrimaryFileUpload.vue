<script setup lang="ts">
import { RiFileUploadLine, RiCloseCircleLine, RiInformationLine } from "@remixicon/vue";
</script>

<template>
  <div>
    <!-- if -->
    <div class="relative">
      <input type="file" name="" id="file-upload" hidden>
      <label for="file-upload" class="block py-4 px-4 md:px-6 w-full min-h-[126px] bg-white border border-borderColor-secondary rounded-3xl">
        <div class="h-full space-y-3">
          <div class="p-2.5 border border-borderColor-secondary rounded-md w-max mx-auto">
            <RiFileUploadLine class="text-dark-primary" />
          </div>
          <div class="text-sm text-textColor-tertiary text-center">
            <p>
              <span class="text-primary font-semibold">Click to upload</span> or drag and drop a photo of the front page of your passport
            </p>
            <p class="text-xs">JPEG, PNG, JPG(max. 6mb)</p>
          </div>
        </div>
      </label>
    </div>

    <!-- else -->
    <div class="relative">
      <input type="file" name="" id="file-upload" accept=".png, .jpg, .jpeg" hidden>
      <label for="file-upload" class="block py-4 px-6 w-full h-[126px] bg-white border border-borderColor-secondary rounded-3xl">
        <div class="h-full flex justify-end items-center">
          <p class="text-danger text-sm xl:text-base font-medium underline">Replace file</p>
        </div>
      </label>

      <div class="flex gap-x-4 absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <img src="@/assets/imgs/jatri-logo.png" alt="jatri logo" class="max-w-[180px] max-h-[100px]">
        <RiCloseCircleLine size="20px" class="text-primary -mt-1" />
      </div>
    </div>

    <div class="mt-2 flex items-center gap-x-2">
      <RiInformationLine size="16px" class="text-dark-secondary" />
      <p class="text-xs text-dark-secondary">File dimensions must be 100x100, and file size must not exceed 1 MB.</p>
    </div>
  </div>
</template>